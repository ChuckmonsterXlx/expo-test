import { ExpoConfig } from "@expo/config-types";

export default ({ config }: { config: ExpoConfig }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      expoPublicApiURL: process.env?.EXPO_PUBLIC_API_URL ?? "NO_FUNCIONO",
      expoPublicNewEnv: process.env?.EXPO_PUBLIC_NEW_ENV ?? "NO_FUNCIONO",
    },
  };
};
