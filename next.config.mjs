/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vutrztzvtzsercvxjuiy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/courses-images/**",
      },
      {
        protocol: "https",
        hostname: "biblicalscienceinstitute.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "media-cldnry.s-nbcnews.com",
        port: "",
        pathname:
          "/image/upload/t_fit-560w,f_auto,q_auto:best/msnbc/Components/Photos/060227/060227_milkyway_hlg_10a.jpg",
      },
    ],
  },
};

export default nextConfig;
