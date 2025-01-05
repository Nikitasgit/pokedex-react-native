import { Shadows } from "@/constants/Shadows";
import { useThemesColors } from "@/hooks/useThemeColors";
import { View, ViewProps } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = ViewProps;

export function Card({ style, ...rest }: Props) {
  const colors = useThemesColors();
  return (
    <View
      style={[style, styles, { backgroundColor: colors.grayWhite }]}
      {...rest}
    />
  );
}

const styles = {
  borderRadius: 8,
  ...Shadows.dp2,
} satisfies ViewStyle;
