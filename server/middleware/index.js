import express from 'express';
import morgan from 'morgan';
import './db-connect.js';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import passport from 'passport';
// ------------------------------------
import GStrategy from 'passport-google-oauth';
const GoogleStrategy = GStrategy.OAuth2Strategy;
import Instagram from 'passport-instagram';
const InstagramStrategy = Instagram.Strategy;
import Local from 'passport-local';
const LocalStrategy = Local.Strategy;
import Facebook from 'passport-facebook';
const FacebookStrategy = Facebook.Strategy;
import Twitter from 'passport-twitter';
const TwitterStrategy = Twitter.Strategy;
import GitHub from 'passport-github';
const GitHubStrategy = GitHub.Strategy;
import LinkedIn from 'passport-linkedin-oauth2';
const LinkedInStrategy = LinkedIn.Strategy;
import OpenID from 'passport-openid';
const OpenIDStrategy = OpenID.Strategy;

const FileStore = sessionFileStore(session);

export default function (app) {

  app.use(morgan('dev'));

  // Body POST запросов.
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());


  // initialize express-session to allow us track the logged-in user across sessions.
  app.use(
    session({
      store: new FileStore(),
      key: 'user_sid',
      secret: 'anything here',
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 6000000,
      },
    }),
  );

  app.use((req, res, next) => {

    if (req.session.user) {
      res.locals.userName = req.session.user.username;
    }
    next();
  });


  // passport.js
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
  // ---------------------------------------------------
    /**
   * Sign in with Google.
   */
  passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => done(null, {username: profile.displayName}),
  ));
  
  /**
   * Sign in with Facebook.
   */
  passport.use('facebook', new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone', 'gender'],
    passReqToCallback: true
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));

  /**
   * Sign in with Twitter.
   */
  passport.use('twitter', new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: '/auth/twitter/callback',
    // passReqToCallback: true
  }, (req, accessToken, tokenSecret, profile, done) => done(null, existingUser)));

  /**
   * Sign in with Instagram.
   */
  passport.use('instagram', new InstagramStrategy({
    clientID: process.env.INSTAGRAM_ID,
    clientSecret: process.env.INSTAGRAM_SECRET,
    callbackURL: '/auth/instagram/callback',
    passReqToCallback: true,
    scope: ['basic', 'public_content', 'comments', 'follower_list', 'likes', 'relationships']
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));

  /**
   * Sign in with LinkedIn.
   */
  passport.use('linkedin', new LinkedInStrategy({
    clientID: process.env.LINKEDIN_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: process.env.LINKEDIN_CALLBACK_URL,
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));


  /**
   * Sign in with Steam.
   */
  passport.use('steam', new OpenIDStrategy({
    apiKey: process.env.STEAM_KEY,
    providerURL: 'http://steamcommunity.com/openid',
    returnURL: '/auth/steam/callback',
    realm: '/',
    stateless: true,
    passReqToCallback: true,
  }, (req, identifier, done) => {
    const steamId = identifier.match(/\d+$/)[0];
    const profileURL = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${steamId}`;
    done(null, profile.displayName);
  }));

  /**
   * Sign in with GitHub.
   */
  passport.use('github', new GitHubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: '/auth/github/callback',
    passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));

}
