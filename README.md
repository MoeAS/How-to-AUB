# How-to-AUB


![alt text](https://github.com/MoeAS/How-to-AUB/blob/frontend/poster-fyp.png?raw=true)



# Some codes to keep in mind when developing:

npm install

react-native run-android

pip3 install -r requirements.txt

1- python
2- from app import db
3- db.create_all()
4- exit()
5- ipconfig
6- get local adapter (NIC) Ethernet IP address (IPV4) E.g. 192.168.1.19
7- flask run -h <INSERT FOUND IP HERE> -p 3000


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

------------------------------------------------------------------------------------

# SQL Queries example data:

NOTE: TO SIGN IN PASSWORD IS (FOR ALL USERS BELOW): 123

- Open SQL.txt
- CTRL A -> CTRL C
- Open mysql workbench
- Paste all the contents and run the query
