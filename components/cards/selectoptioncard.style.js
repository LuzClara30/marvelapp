import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: (selectedType, item) => ({
    width: 350,
    height: 90,
    marginVertical: 2,
    padding: SIZES.xLarge,
    backgroundColor: selectedType === item ? COLORS.darkred : COLORS.red,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: () => ({
    width: 50,
    height: 50,
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  logoOptions: {
    width: 75,
    borderRadius: SIZES.medium,
    height: 75,
    justifyContent: "space-around",
    alignItems: "center",
  },
  options: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.white,
    marginTop: SIZES.small / 1.5,
    textAlign: "center",
    textAlignVertical: "center",
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: SIZES.small,
  },
  option: () => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.white,
  }),
  infoOptions1: {
    position: 'absolute',
    maxWidth: 340/2,
  },
  infoOptions2: {
    position: 'absolute',
    maxWidth: 340/2,
    justifyContent: "center",
    right: 2,
    top: 9,
    bottom: 1,

  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: () => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: COLORS.red,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: COLORS.red,
  },
});

export default styles;
