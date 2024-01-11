/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, useColorScheme, View as DefaultView, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import { StyleSheet } from 'react-native';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const fontFamily= "regular"

  return <DefaultText style={[{ color, fontFamily }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  if (colorScheme === 'dark') {
    return (
      <ImageBackground
        source={require('../assets/images/bg2.jpg')}
        style={styles.background}
      >
        <DefaultView style={[{  }, style]} {...otherProps} />
      </ImageBackground>
    );
  } else {
    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
  }
}

export function TransparentView (props: ViewProps)  {
  const { style, ...otherProps } = props;

  return (
    <DefaultView style={[{ backgroundColor: 'none' }, style]} {...otherProps} />
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.8,
  },
});


