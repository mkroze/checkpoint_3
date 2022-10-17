/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    MONGO_URI:"mongodb+srv://mkrozee:12345@cluster0.1rwh1lz.mongodb.net/?retryWrites=true&w=majority"
  }
}
