**FUVU**

_User can listen to soundtracks and get information about the most popular games from their favourite game categories._

_The aim of this project is to classify music according to the mood people feel and present them to the user._

**_PRECONDITIONS_**

**_1)_** Json is required.

**_2)_** User must have internet connection.

**_3)_** The home page of the web application has been opened in the browser.

**_The event that started the use case_**

_First the json server has to be started in the src/rest service file from the terminal using the command "json-server --watch db.json" , after that the project has to be started from the main folder CS391-Project2 from another terminal using "npm run build" command, that will open the home page._

**_Usage Scenario_**

**_1) Home_** In home page, you can navigate to sign in or sign-up pages.

**_2) Register_** In register page users that does not have an account can create their own account. Name, surname, user name, email and password is required. If email or user name is already in use, you will need to change it.

**_3) Sign-in_** Sign-in page will require email and password. If one of them is wrong, it will ask to enter the information again. If the information is correct, user will log in and see the game page.

**_4) Gamepage_** In game page, there are different game categories that user can select. You can navigate to there pages either by clicking the links under the photos or from the header.

**_5) Game Categories(TPS,FPS etc.)_** In the game categories pages, you will see games related to this categories with a picture, a soundtrack and information about the game. From the header, you can navigate to different pages.

**_Project Members_**

**_1) Volkan Burhan Çebi:_** FirstPersonShooter.js, ThirdPersonShooter.js, OpenWorld.js, Page.css, README.md

**_2) Utku Özkan:_** BattleArena.js , BattleRoyal.js, RealTimeStrategy.js, Page.css, App.js, App.css

**_3) Muhammed Fatih Emecen:_** SignIn.js, SignUp.js, HomePage.js, GamePage.js, Main.css

**_4) Hamdi Umut Arıkan:_** images, mp3

**_Libraries_**

1. **_React-bootstrap_**
2. **_React-router-dom_**
3. **_React-audio-player_** : This library is used for playing mp3 files.
4. **_Json-server_**
5. **_Axios_**
