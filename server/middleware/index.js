import express from 'express';
import morgan from 'morgan';
import './db-connect.js';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import passport from 'passport';
// ------------------------------------
import GStrategy from 'passport-google-oauth';
import Instagram from 'passport-instagram';
import Facebook from 'passport-facebook';
import Twitter from 'passport-twitter';
import GitHub from 'passport-github';
import LinkedIn from 'passport-linkedin-oauth2';
const GoogleStrategy = GStrategy.OAuth2Strategy;
const InstagramStrategy = Instagram.Strategy;
const FacebookStrategy = Facebook.Strategy;
const TwitterStrategy = Twitter.Strategy;
const GitHubStrategy = GitHub.Strategy;
const LinkedInStrategy = LinkedIn.Strategy;

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
    passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));

  /**
   * Sign in with Twitter.
   */
  passport.use('twitter', new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: '/auth/twitter/callback',
    // passReqToCallback: true
  }, (req, accessToken, tokenSecret, profile, done) => done(null, profile.displayName)));

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
   * Sign in with GitHub.
   */
  passport.use('github', new GitHubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: '/auth/github/callback',
    passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => done(null, profile.displayName)));

}
