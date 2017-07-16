//Service to get data from employee mvc controller 
myapp.service('employeeService', function ($http) {

    this.serviceBaseURL = 'http://localhost:49990';

    //read employees
    this.getAllEmployees = function () {
        return $http.get(this.serviceBaseURL + '/Employee/GetEmployee');
    }

    //add new employee
    this.save = function (Employee) {
        var request = $http({
            method: 'post',
            url: this.serviceBaseURL + '/Employee/Insert',
            data: Employee
        });
        return request;
    }    

    //update Employee records
    this.update = function (Employee) {
        var updaterequest = $http({
            method: 'post',
            url: this.serviceBaseURL + '/Employee/Update',
            data: Employee
        });
        return updaterequest;
    }

    //delete record
    this.delete = function (UpdateEmpNo) {                
        return $http.post(this.serviceBaseURL + '/Employee/Delete/' + UpdateEmpNo);       
    }
});
