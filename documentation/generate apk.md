# How to Generate a Debug APK

1. From the project's root run `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`
2. Run `cd android`
3. Run `./gradlew assembleDebug`
4. The `.apk` can be found under `./android/app/build/outputs/apk/debug`


# How to Generate a Release APK

1. From the project's root run `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`
2. Run `cd android`
3. Run `./gradlew assembleDebug`
4. The `.apk` can be found under `./android/app/build/outputs/apk/debug`
