# How-to-AUB

# Some codes to keep in mind when developing:

npm install

react-native run-android

------------------------------------------------------------------------------------

# Some codes to keep in mind when pushing or pulling from github:

 cd/your project directory

 1) git init
 2) git add . or git add ['filename']
 3) git commit -m "Comment here"
 4) git remote add origin https://github.com/yourusername/your-repo-name.git
 5) in our case: git remote add origin https://github.com/MoeAS/How-to-AUB.git
 6) git pull origin master
 7) git push origin master

other commands:

git pull origin master --allow-unrelated-histories

git reset

git push -f origin master

------------------------------------------------------------------------------------

# How to produce an Android APK for users to install:

Step 1: Go to the root of the project in the terminal and run the below command:

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

Step 2: Go to android directory:

cd android

Step 3: Now in this android folder, run this command

./gradlew assembleDebug

There! you’ll find the apk file in the following path:

yourProject/android/app/build/outputs/apk/debug/app-debug.apk
