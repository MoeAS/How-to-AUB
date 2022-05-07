# How-to-AUB


[embed]https://github.com/MoeAS/How-to-AUB/blob/frontend/poster-fyppp.pdf[/embed]



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

------------------------------------------------------------------------------------

# SQL Queries example data:

NOTE: TO SIGN IN PASSWORD IS (FOR ALL USERS BELOW): 123



INSERT INTO user VALUES(1, "mba26@mail.aub.edu", "admin1", "$2b$12$cISXpoxHnBKnFJ2dGENWXur1GCJ/tIyMJw.Hk183CMIU6S16g/Ige", 1);
INSERT INTO user VALUES(2, "sre17@mail.aub.edu", "admin2", "$2b$12$cISXpoxHnBKnFJ2dGENWXur1GCJ/tIyMJw.Hk183CMIU6S16g/Ige", 0);
INSERT INTO user VALUES(3, "dmy06@mail.aub.edu", "dmy06", "$2b$12$cISXpoxHnBKnFJ2dGENWXur1GCJ/tIyMJw.Hk183CMIU6S16g/Ige", 0);
INSERT INTO user VALUES(4, "jdr00@mail.aub.edu", "jdr00", "$2b$12$cISXpoxHnBKnFJ2dGENWXur1GCJ/tIyMJw.Hk183CMIU6S16g/Ige", 0);
INSERT INTO forum VALUES(1, "mba26@mail.aub.edu", "Welcome to our Guides Feature!", "Here you will find all the information needed, and can ask for more!", 5, "2022-04-28 19:01:34");
INSERT INTO forum_reply VALUES(1, "sre17@mail.aub.edu", 1, "Ana 7olwa zay l fol", "2022-04-29 19:02:34");
INSERT INTO forum_reply VALUES(2, "mba26@mail.aub.edu", 1, "Ana ghonwa fibo2 l kol", "2022-04-29 19:03:34");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("Jafet", "There are 3 places to study in Jafet Library. Each of those places are divided into different floors in the building. The ground floor is a silent room that fits a big number of students. The top floor is not a silent room, where students can study or chat together. Finally, the ground floor is a silent room where students can focus the most.", "../assets/jafet.png");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("Oxy", "There are multiple rooms to study in this building, such as the FYP rooms. There are also places to study at on the 3rd floor balcony, as well as the 6th floor (both indoors and outdoors).", "../assets/oxy.png");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("Osb", "In this building, there are many places to study in. Almost all floors above the ground floor have a place to sit and study, including mini-labs and lounge.", "../assets/osb.png");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("Reynolds", "This building has many places to sit and study. Almost all 6 floors have a places for students to sit and focus on his/her homework and exams. All while they can take a lunch break using the vending machines available :D", "../assets/reynolds.png");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("Chemistry", "The building features a huge library where students can sit and study all while they can take a break just outside the building and watch the greenery.", "../assets/chem.png");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("West Hall", "Students have the ability to study in a lot of places in this building, and since it has a lot of empty space, students can find many spread chairs and tables to sit and study.", "../assets/westhall.png");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("Fisk Hall", "One of the best buildings whenever students want to study and focus. This building has tables mounted on the walls with chairs facing those tables. Students want comfortable places to study? This is the go to building.", "../assets/fisk.png");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("Bliss Hall", "This building, just like the others, has many places for students to study at. The difference is that usually the labs in this building have air conditioning which benefits students especially during the summer.", "../assets/bliss.png");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("Issam Fares", "This building looks very uniquely constructed not just from the outside, but from the inside as well. It has many places for students to study and focus, and the labs in this building have a lot of high-end iMacs.", "../assets/issamfares.png");
INSERT INTO STUDY(place_name, place_description, place_image) VALUES("Dwell", "This place is found on the first floor in Bechtel Engineering Building. This is not a silent area, but students can still study there and have group discussions related to projects for example.", "../assets/dwell.png");
INSERT INTO club VALUES("5038", "IEEE Club", "IEEE AUB Student branch was founded in 1997. We are the first student branch to be opened in Lebanon, and have been the biggest branch ever since. Not long ago we celebrated our 20 year anniversary and took this opportunity to look back at our history. We found 20 years of hard work towards the same mission, but with new ideas, change, ambition for IEEE AUB, and growth. IEEE AUB started off as a small community just like any other branch, but grew to become now a huge network of members and alumni that never stop being IEEEers. This network is one of the main benefits IEEE has to offer: it opens doors for opportunities, mentorship, and friendship.", "Technology");
INSERT INTO club VALUES("5039", "Artist Society Club", "Artist Society Club", "Arts");
INSERT INTO club VALUES("5115", "Game Development Club", "Game Development Club", "Gaming");
INSERT INTO club VALUES("5013", "Biology Student Society", "Biology Student Society", "Campus Life");
INSERT INTO club VALUES("5014", "Business Student Society", "Business Student Society", "Campus Life");
INSERT INTO club VALUES("5015", "Chemistry Student Society", "Chemistry Student Society", "Campus Life");
INSERT INTO club VALUES("5052", "Classical Music Club", "Classical Music Club", "Music");
INSERT INTO club VALUES("5057", "Music club", "Music club", "Music");
INSERT INTO club VALUES("5060", "Social Club", "Social Club", "Campus Life");
INSERT INTO course VALUES("Operating Systems", "10134", "EECE432", "This course covers the principles of operating systems and systems programming. The
topics discussed in class are processes, threads, concurrency and synchronization,
scheduling, deadlocks, memory management, file systems, i/o devices, parallel
and distributed systems, and security. The course will be accompanied by hands-on
assignments involving contemporary linux kernels.", "EECE");
INSERT INTO course VALUES("Introduction to Probability and Statistics", "10135", "STAT230", "Display of data, properties of probability, methods of enumeration, conditional probability, and
independent events; discrete and continuous univariate distributions, generating functions,
independent random variables, and the central limit theorem.", "STAT");
INSERT INTO course VALUES("Electric Circuits", "10136", "EECE210", "A course on fundamentals of electric circuits; basic elements and laws; techniques
of circuit analysis: node voltage, mesh current, Thevenin, Norton and source
transformation; inductors, capacitors, mutual inductance and transformers; transient
response of RC, RL and RLC circuits; steady state AC circuits; power calculations; circuit
simulation using SPICE.", "EECE");
INSERT INTO course VALUES("Introduction to Computation and Programming", "10137", "EECE230", "This is an introductory programming course with an emphasis on abstractions and elementary algorithmic ideas. It uses the Python programming language. Topics include
data types, selection, repetition, strings, lists, functions, files, sorting and searching
algorithms, elementary asymptotic analysis, object-oriented programming, recursion,
and divide and conquer algorithms. The course has a weekly lab.", "EECE");
INSERT INTO course VALUES("Analog Signal Processing", "10138", "EECE290", "A course on selected topics in circuit analysis; operational amplifiers; frequency
responses; Butterworth and active filters; responses to periodic inputs; real, reactive
and complex power; maximum power transfer; responses to step, impulse and switching
operations; convolution; Laplace transform and its use in circuit analysis; Fourier
transform; two-port circuits; and circuit simulation using SPICE.", "EECE");
INSERT INTO course VALUES("Electronics", "10139", "EECE310", "A course on semiconductors; PN junctions; diodes and diode circuits; MOS transistor and
applications such as amplifier and switch; bipolar junction transistor and applications
such as amplifier and switch; and circuit simulation using SPICE.", "EECE");
INSERT INTO course VALUES("Introduction to Engineering and Architecture", "10131", "FEAA200", "The course is designed to familiarize first year students with the different disciplines
in Engineering and Architecture including: Architecture, Civil, Mechanical, Electrical,
Chemical, Industrial and technologies used in the fields. The course takes a unique
interdisciplinary approach to the field and introduces the related disciplines in the
world of engineering and architecture. One key objective is to promote interdisciplinary
interaction and innovative thinking. The course is organized into modules covering
the different disciplines within the Maroun Semaan Faculty of Engineering and
Architecture (MSFEA). The last module of the class showcases interdisciplinary
projects demonstrating interactions among the different fields. The lectures explain
as applicable to each discipline, through examples, notions of problem solving, design
thinking, process of invention and innovation, environmental and civic responsibility,
and measures of success in aesthetics and performance. The course project is a key
component of the course. It is interdisciplinary in nature bringing ideas and solutions
from all disciplines in engineering and architecture. Annually.", "EECE");
INSERT INTO course VALUES("Electric Circuits Laboratory", "10140", "EECE310L", "A laboratory course that covers passive electronic components; laboratory instruments;
voltage-divider circuits; sources and Thevenin’s Theorem; RC lead-lag networks; series
resonance; the transformer; op-amp circuits; single-phase rectifier circuits; LEDs; Zener
diode regulator; diode clamping and clipping; BJT and MOSFET characteristics.", "EECE");
INSERT INTO course VALUES("Data Structures and Algorithms", "10141", "EECE330", "This is an introductory course in data structures and algorithms with an emphasis
on programming. The course uses the C++ programming language. Topics include:
elements of C++, memory management, C++ classes and templates, linked-lists, sacks,
queues, standard template library, binary trees, binary search trees, balanced trees,
heaps, priority queues, hashing, graph traversals, introduction to graph algorithms.
The course has a weekly lab.", "EECE");
INSERT INTO course VALUES("Software Engineering", "10142", "EECE430", "A course that teaches students modern processes and tools for working on software
projects, including the design, development, testing, and deployment of software
systems. They will understand and use agile development methodologies and tools,
including lo-fi UI sketching, user stories, behavior-driven development, and version
control for team-based development, management tools, and design patterns. The
course requires the completion of a group-based real-life software project.", "EECE");
INSERT INTO course VALUES("Communication Systems", "10143", "EECE442", "This course introduces students to the transmission and reception of analog signals;
performance of analog communication systems in the presence of noise; analog to
digital conversion and pulse coded modulation; transmission and reception of digital
signals; performance of digital communication systems in the presence of noise and
inter-symbol interference.", "EECE");
INSERT INTO course VALUES("Basic Arabic Grammar and Syntax", "10441", "ARAB201A", "A training course in the basic elements of Arabic grammar, syntax, and morphology, with special
emphasis on oral and writing skills. Each semester.", "ARABIC");
INSERT INTO course VALUES("Readings in Arabic Literature", "10442", "ARAB201B", "A close textual and analytical study of a wide variety of selections from modern Arabic literature
and thought designed to evoke aesthetic and intellectual discussions of issues of Arab culture.
Each semester", "ARABIC");
INSERT INTO course VALUES("Earth Resources and Energy", "10451", "GEOL205", "A study of the main economic mineral resources and traditional and alternate energy
resources, with an emphasis on the environmental impacts of their use and misuse. A
special emphasis is given to regional issues. Open to both arts and sciences students,
but not to Geology and Petroleum Geosciences students. Every term.", "GEOLOGY");
INSERT INTO prerequisite VALUES("10138", "10136", "EECE210");
INSERT INTO prerequisite VALUES("10139", "10138", "EECE290");
INSERT INTO prerequisite VALUES("10139", "10131", "FEAA200");
INSERT INTO prerequisite VALUES("10140", "10139", "EECE310");
INSERT INTO prerequisite VALUES("10142", "10139", "EECE310");
INSERT INTO prerequisite VALUES("10141", "10137", "EECE230");
INSERT INTO prerequisite VALUES("10141", "10122", "CMPS211");
INSERT INTO prerequisite VALUES("10143", "10135", "STAT230");
INSERT INTO prerequisite VALUES("10143", "10121", "EECE340");
INSERT INTO prerequisite VALUES("10135", "10111", "MATH201");
insert into reminder(user_email, title, description, date) values("mba26@mail.aub.edu", "EECE 437 Assignment", "Have to finish backend flask design", "2022-05-06");
insert into reminder(user_email, title, description, date) values("mba26@mail.aub.edu", "EECE 430 Assignment", "Deploy Django project onto heroku", "2022-06-10");
insert into reminder(user_email, title, description, date) values("mba26@mail.aub.edu", "STAT 230 Exam", "Exam is on chapters 1 till 4 inclusive", "2022-05-18");
insert into reminder(user_email, title, description, date) values("mba26@mail.aub.edu", "Send files to Dr. Zaher", "Send python flask files to recheck for mistakes with Dr. Zaher", "2022-05-22");
insert into reminder(user_email, title, description, date) values("mba26@mail.aub.edu", "EECE 437 Assignment", "Help with improving frontend design", "2022-06-08");

