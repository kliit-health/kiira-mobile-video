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
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        try {
          trimCache(this);
        } catch (Exception e) {
          e.printStackTrace();
        }
    }

    public static void trimCache(Context context) {
        try {
          File dir = context.getCacheDir();
          if (dir != null && dir.isDirectory()) {
              deleteDir(dir);
          }
        } catch (Exception e) {
          // TODO: handle exception
        }
    }

    public static boolean deleteDir(File dir) {
        if (dir != null && dir.isDirectory()) {
          String[] children = dir.list();
          for (int i = 0; i < children.length; i++) {
              boolean success = deleteDir(new File(dir, children[i]));
              if (!success) {
                return false;
              }
          }
        }
        return dir.delete();
    }
}