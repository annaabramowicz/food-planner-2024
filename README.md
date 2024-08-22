
# Food Planner 

Search, find and discover interesting movies, tv series and people related to cinema. Thanks to a clear interface, move very smoothly into page. You can check a lot of details. Data is fetching from an external [API](https://www.themoviedb.org/) and prepared appropriately. 

## Configuration
For the application to work properly, you have to generate a Bearer token. Without it, app will not work! 
1. Go to this [page](https://spoonacular.com/food-api) and create the user account.
2. Go to account settings and find "Profile" tab.
3. Find "Show / Hide API Key" and copy them.
   
## Project setup

1. Download this repository.
```bash
git clone https://github.com/annaabramowicz/food-planner-2024.git
```
2. Install dependencies
```bash
yarn install
```
3. In root folder create new file called ".env.local" and paste it:
```bash
VITE_APP_API_KEY=YOUR_KEY
```
Instead "YOUR_KEY" paste your "API Key".

4. Start app
```bash
yarn start
```

You can also view website on https://food-planner-2024.vercel.app/
