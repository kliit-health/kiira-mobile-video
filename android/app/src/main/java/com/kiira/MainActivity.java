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
}

