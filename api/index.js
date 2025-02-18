import { createRequestHandler } from '@remix-run/vercel';
import * as build from '../build/server/index.js'; // Ensure the correct path

export default createRequestHandler({ build, mode: process.env.NODE_ENV });
