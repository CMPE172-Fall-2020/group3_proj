# SJSU CMPE172 - Fall 2020 

## Weight Tracker App

**Group Number: 3**


# Weight Tracker App 
## A web application to enter and calculate weight and bmi**

Mohammad Sleiman, Isabelle Low, Smruthi Danda

San Jose State University

Computer Engineering 172: EnterpriseSoftware Fall 2020


## Table of content

- [Setup](#setup)
    - [Backend](#backend)
    - [Fronted](#frontend)
    - [Docker](#docker)
- [Diagrams](#diagrams)
    - [System Diagram](#system-diagram)
    - [Class Diagram](#class-diagram)
    - [DataBase Schema](#database-schema)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)



## Setup
### Backend
To set up database on local machine, run the following sql script:
```
DROP DATABASE IF EXISTS weight_tracker;
CREATE DATABASE weight_tracker;
USE weight_tracker;

CREATE TABLE IF NOT EXISTS userinfo (
  id int(11) NOT NULL AUTO_INCREMENT,
  first_name varchar(45) NOT NULL,
  last_name varchar(45) NOT NULL,
  age int(11) NOT NULL,
  weight float(11) NOT NULL,
  height float(11) NOT NULL,
  PRIMARY KEY (id)
);
```

To run the springboot application on local machine, go to the **WeightTrackerApplication.java** file in src/main/java/cmpe172_group3.weight_tracker and run file as a java application.
### Frontend
To install node packages, run:
```npm install```

To run application on local machine, run:
```npm start```
### Docker

## Diagrams

### System Diagram
[system diagram from report here]
### Class Diagram
[class diagram from report here]
### Database Schema
[database schema from report here]

## File Structure
## Screenshots
  [insert demo screenshots here]








