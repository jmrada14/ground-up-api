# ground-up-api

This is an API with data about congress and senate (US). 
Here you will find all members for house of reps and senate.

current information in this API:

```javascript

const membersSchema = new Schema({
    name: {type: String, required: true},//Full name
    state: {type: String, required: true},//State
    chamber: {type: String, required: true},//House or senate
    role: {type: String, required:true},//Role in house-senate
    gender: {type: String, required:true},// F-M or other if applies
    party: {type: String, required:true},//Party
    twitter: {type: String},//Twitter
});

```

## Available routes:

- /api/members/all           ::    This route display all members for both house *AND* senate.

- /api/members/state/:state           ::    This route display all members for both house *AND* senate *by* State. please make sure to use *capital case* for the state. example: /api/members/state/FL

- /api/members/party/:party           ::    This route display all members for both house *AND* senate *by* Party. where party options = D *or* R. example: /api/members/party/D

- /api/members/chamber/:chamber       ::    This route display all members for house *OR* senate, where :chamber = house or senate. example: /api/members/chamber/house

- /api/members/chamber/:chamber/state/:state           ::    This route display all *state* members for  house *OR* senate, where :chamber = house or senate. please make sure to use *capital case* for the state. example: /api/members/chamber/house/state/FL

- /api/members/chamber/:chamber/party/:party           ::    This route display all members for  house *OR* senate by party, where :chamber = house or senate. where party options = D *or* R. example: /api/members/chamber/house/party/R

- /api/members/chamber/:chamber/gender/:gender         ::    This route display all members for  house *OR* senate, where :chamber = house or senate. Where gender can be F *or* M. example: api/members/chamber/senate/F 

-/api/members/party/:party/state/:state                ::    This route display all members for both house *AND* senate *by* Party. where options = D *or* R. please make sure to use *capital case* for the state. example: /api/members/party/D/state/NY

-/api/members/gender/:gender/party/:party              ::    This route display all members by party *and* gender, where gender can be F *or* M and party can be D *or* R
