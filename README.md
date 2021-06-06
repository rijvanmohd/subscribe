# Subscription

## Setup Instructions

[Node.js](https://nodejs.org/) v15.6 and [Python](https://https://www.python.org//) v3.7 is used for this project.

Install the dependencies and start the server.

```sh
pip install virtualenv
virtualenv subscribe
source subscribe/bin/activate
cd subscription
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

`Django Admin will be accessible at 127.0.0.1:8000`

For Front End...
make sure present working directory is `subscribe`

```sh
cd frontend
npm install
npm start
```

`Frontend will be accessible at 127.0.0.1:3000`
Use `\subscriptions` to see the list of all subscribers.
