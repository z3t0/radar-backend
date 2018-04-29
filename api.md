# Data Schemes
- User
- Society
- Event

## User
- name:
	- first
	- last
- email
- avatar
- id

## Society
- name
- description
- categories
- links:
  - facebook:
  - website:
  - twitter
- events: list of events
- contact: list of Users
- members: list of Users
- admins: list of Users
- id

## Event
- name
- society
- description
- tags: list of tags
- start date/time
- end date/time
- location # TODO maybe filter by location
- id

# Requests
All results are JSON.
At least one of the parameters are required.
All italicized parameters are required.

- getUsers
- getSocieties
- getEvents
- createUser
- createSociety
- createEvent

## getUsers
- METHOD: GET
- Parameters:
  - id: get a specific user given their id
  - societyId: filter by society
  - firstname: filter by firstname
  - lastname: filter by lastname
- Result:
  - users: List of Users
  
## getSocieties
- METHOD: GET
- Parameters:
  - id: get a specific society given its id
  - name: filter by name
  - description: filter by description
  - categories: filter by category
- Result:
  - societies: list of Societies

## getEvents
- METHOD: GET
- Parameters:
  - id: get a specific event given its id
  - society: filter by society
  - name: filter by name
  - description: filter by description
  - tags: list of tags; filter by tags
  - start: filter by start time
  - end: filter by end time
- Result:
  - events: list of Events

## createUser
TODO: Login / Authentication
- METHOD: POST
- Parameters:
  - Name:
	- first
	- last
  - email
  - avatar
  - self: the User performing the request
- Results:
  - User: returns the newly created User

## createSociety
- METHOD: POST
- Parameters:
  - name
  - description
  - categories
  - links
  - self: User creating the request
- Result:
  - societies: list of Societies
  
## createEvent
- METHOD: POST
- Parameters:
  - name
  - Society
  - description
  - tags
  - start date/time
  - end date/time
  - location
  - self: User creating the request
- Result:
  - societies: list of Societies
