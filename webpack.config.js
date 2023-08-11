export const module = {
  rules: [
    {
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },
          },
        },
      ],
    },
  ],
};
