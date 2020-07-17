const debug from 'debug')('app:passport');
const passport from 'passport');// Simple and elegant authentication library for node.js.
const request from 'request');// Simplified HTTP request library.
import { Strategy: InstagramStrategy } from 'passport-instagram';
import { Strategy: LocalStrategy } from 'passport-local';
import { Strategy: FacebookStrategy } from 'passport-facebook';
import { Strategy: TwitterStrategy } from 'passport-twitter';
import { Strategy: GitHubStrategy } from 'passport-github';
import { OAuth2Strategy: GoogleStrategy } from 'passport-google-oauth';
import { Strategy: LinkedInStrategy } from 'passport-linkedin-oauth2';
import { Strategy: OpenIDStrategy } from 'passport-openid';
import { OAuthStrategy } from 'passport-oauth';
import { OAuth2Strategy } from 'passport-oauth';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});


/**
 * Sign in with GitHub.
 */
passport.use('github', new GitHubStrategy({
  clientID: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: '/auth/github/callback',
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => done(null, existingUser)));

/**
 * Sign in with Twitter.
 */
passport.use('twitter', new TwitterStrategy({
  consumerKey: process.env.TWITTER_KEY,
  consumerSecret: process.env.TWITTER_SECRET,
  callbackURL: '/auth/twitter/callback',
  passReqToCallback: true
}, (req, accessToken, tokenSecret, profile, done) => done(null, existingUser)));

/**
 * Sign in with Facebook.
 */
passport.use('facebook', new FacebookStrategy({
  clientID: process.env.FACEBOOK_ID,
  clientSecret: process.env.FACEBOOK_SECRET,
  callbackURL: '/auth/facebook/callback',
  profileFields: ['name', 'email', 'link', 'locale', 'timezone', 'gender'],
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => done(null, existingUser)));

/**
 * Sign in with Google.
 */
passport.use('google', new GoogleStrategy({
  clientID: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: '/auth/google/callback',
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => done(null, existingUser)));

/**
 * Sign in with LinkedIn.
 */
passport.use('linkedin', new LinkedInStrategy({
  clientID: process.env.LINKEDIN_ID,
  clientSecret: process.env.LINKEDIN_SECRET,
  callbackURL: process.env.LINKEDIN_CALLBACK_URL,
  scope: ['r_basicprofile', 'r_emailaddress'],
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => done(null, existingUser)));

/**
 * Sign in with Instagram.
 */
passport.use('instagram', new InstagramStrategy({
  clientID: process.env.INSTAGRAM_ID,
  clientSecret: process.env.INSTAGRAM_SECRET,
  callbackURL: '/auth/instagram/callback',
  passReqToCallback: true,
  scope: ['basic', 'public_content', 'comments', 'follower_list', 'likes', 'relationships']
}, (req, accessToken, refreshToken, profile, done) => done(null, existingUser)));

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
  done(error, null);
}));
