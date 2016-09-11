/*
* Author: Shane Connolly
* Assignment: WE4 Mobile Web Applications, Digital Skills Academy
* Date : 2016/08/19

* References
* http://stackoverflow.com/questions/15300067/disable-submit-button-when-form-invalid-with-angularjs
* http://yuilibrary.com/yui/docs/app/app-todo.html
* http://web.koesbong.com/2011/01/24/sortable-and-editable-to-do-list-using-html5s-localstorage/
* http://www.hongkiat.com/blog/jquery-ui-sortable/
* http://blog.jaykanakiya.com/angular-js-todo-list-sortable/
* http://www.w3schools.com/css/css_image_transparency.asp
* http://stackoverflow.com/questions/6382023/changing-the-color-of-a-hr-element
* http://stackoverflow.com/questions/15166270/how-can-i-get-the-value-of-the-checked-radio-button-when-submitting-a-form-using
* http://jsfiddle.net/arunpjohny/P3ctY/
*
*/

var app = angular
			.module('toDoApp', [])
			.controller('toDoController', function($scope) 
			{
			   // Set up the data
				var toDoList = [
					{title: 'Write a TO DO app', status: false, importance: 'high'},
				  	{title: 'Get milk', status: false, importance: 'medium'},
					{title: 'Find the dog', status: false, importance: 'low'}
				];

				// Add it to the scope
				$scope.toDos = toDoList;

				$scope.highImportIcon = "images/icons/high-importance.png"
				$scope.medImportIcon = "images/icons/med-importance.png"
				$scope.lowImportIcon = "images/icons/low-importance.png"

				//Function to add a new To Do item to the list
				$scope.addToDo = function()
				{	
					$scope.toDos.push({'title':$scope.newToDo, 'status':false, 'importance':$scope.radioValue})

					/*$scope.newToDo = ''*/
				}

				//Function to remove one item from the To Do List
				$scope.delete = function ($theIndex)
				{
					$scope.toDos.splice($theIndex, 1);
				}

				//Function to remove all of the completed tasks from the TO Do List
				$scope.clearCompleted = function()
				{
					$scope.toDos = $scope.toDos.filter(function(item)
					{
						return !item.status
					})
				}

				$scope.GetCount = function()
				{
					return $scope.toDos.length;
				}

			
			});




