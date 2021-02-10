package com.kiira;

import java.io.File;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.content.Context;
import androidx.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.reactnativecomponent.splashscreen.RCTSplashScreen;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.content.pm.ActivityInfo;
import android.util.Log;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "kiira";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        RCTSplashScreen.openSplashScreen(this);
        super.onCreate(savedInstanceState);
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
         protected ReactRootView createRootView() {
           return new RNGestureHandlerEnabledRootView(MainActivity.this);
         }
        };
    }

    @Override
    protected void onStop() {
      super.onStop();
      // clearApplicationData();
    }

    // public void clearApplicationData() {
    // File cache = getCacheDir();
    // File appDir = new File(cache.getParent());
    // if (appDir.exists()) {
    //     String[] children = appDir.list();
    //     for (String s : children) {
    //         if (!s.equals("lib")) {
    //             deleteDir(new File(appDir, s));
    //         }
    //     }
    //   }
    // }

    // public static boolean deleteDir(File dir) {
    //     if (dir != null && dir.isDirectory()) {
    //         String[] children = dir.list();
    //         int i = 0;
    //         while (i < children.length) {
    //             boolean success = deleteDir(new File(dir, children[i]));
    //             if (!success) {
    //                 return false;
    //             }
    //             i++;
    //         }
    //     }

    //     assert dir != null;
    //     return dir.delete();
    // }
}

