# Project Management App

## Overview
 building an app that assists in project management. Your app will allow team members to view tasks and mark them as complete. Tasks should be grouped with a project and manager should be able to manage and create task
 



## Project planning:

### Technology:
- React 
- Express
- Mongo 
- Node

### React:
-  Component:
-  Login component
    - Manager
•	
•	Non manage
	Register component
•	Name 
•	Email 
•	Role
•	Job title 
•	Password 
	Home 
•	Manager: ( display user info, project, task assign, add or remove project)
o	Manage project(, add or remove project)
•	Non Manager: ( display user info, project, task assign)
	Project component 
•	Team size
•	Budget
•	Workload
•	Completion time
•	Contributors 
•	
	Task component 
•	Description
•	Complete/not complete status
•	Person assigned
•	Due date
•	Estimated duration
•	
•	Manger 
o	Manage Task( add, remove, edit task)

•	Non manager
Express:
	-Base url : localhost:4000/api/Projects

	- Base url : localhost:4000/api/Project/Task
	-				/User/userid
	- 				
Mongo:
	ProjectManagement collectiosn 
	User document 
	Project document 
	Tasks document
