var app = angular.module('energyLeaders');

app.service('UserService', function(){
  this.consultantData = [
    {
      first_name: 'John',
      last_name: 'Smith',
      email: 'john@example.com',
      location: {
        address: "123 S Park Reserve Way",
        city: "Midvale",
        zip_code: "84047",
        state: "Utah",
        country: "USA"
      },
      phone_number: "801-901-5595"

    },
    {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'Jane@example.com',
      location: {
        address: "321 S Park Reserve Way",
        city: "Salt Lake City",
        zip_code: "84041",
        state: "Utah",
        country: "USA"
      },
      phone_number: "801-924-5555"
    },
    {
      first_name: 'Sally',
      last_name: 'Jones',
      email: 'Sally@example.com',
      location: {
        address: "321 S Trolly Way",
        city: "Salt Lake City",
        zip_code: "84021",
        state: "Utah",
        country: "USA"
      },
      phone_number: "801-444-5555"
    },
    {
      first_name: 'Jose',
      last_name: 'Garcia',
      email: 'Jose@example.com',
      location: {
        address: "123 S Murky Way",
        city: "Salt Lake City",
        zip_code: "84031",
        state: "Utah",
        country: "USA"
      },
      phone_number: "801-234-5555"
    }
  ];

  this.companyData = [
    {
      representative: {
        first_name: 'Donald',
        last_name: 'Trump',
        email: 'bigMoney@trump.com',
        phone_number: '602-555-5555'
      },
      company_name: 'Trump Energy',
      location: {
        address: "123 Big Energy Avenue", 
        city: 'New York',
        state: 'New York',
        zip_code: '10001',
        country: 'USA'
      },
    },
    {
      representative: {
        first_name: 'Carlos',
        last_name: 'Slim',
        email: 'Ricachon@slimIndustries.com',
        phone_number: '121-555-5555'
      },
      company_name: 'Slim Industries',
      location: {
        address: "123 Avenida los Angeles", 
        city: 'Distrito Federal',
        state: 'Mexico',
        zip_code: '10001',
        country: 'Mexico'
      }
    }
  ];

  this.projectData = [
    {
      projectId: 0,
      projectDescription: {
        project_title: 'Bridge to Mars',
        overview: 'Need to build a bridge to Mars. It is going to involve a lot of time and effort. It will need space travel experience and engineering experience.',
        deliverable: 'A functional bridge'
      },
      location: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
      },
      start_date: 'January, 01, 2016',
      project_length: 'Mid-term (3 to 6 Months)',
      weekly_hours: '40',
      commute: 'Rotational Schedule',
      rotational_days_on: '15',
      rotational_days_off: '15',
      project_budget: "25,000",
      desired_candidate: {
        experience: {exp1: 'Six Sigma', exp2: 'Safety'}
      },
      education:'MBA',
      date_created: '2015-04-01T16:06:58.970Z'
    },
    {
      projectId: 1,
      projectDescription: {
        project_title: 'Manage Longest Pipeline Construction',
        overview: 'Need a project manager to manage the construction of the longest pipeline in the world. Need to manage the people and processes that will construct the building of the pipeline.',
        deliverable: 'A functional bridge'
      },
      location: {
        city: 'Distrito Federal',
        state: 'Mexico',
        country: 'Mexico'
      },
      start_date: 'March, 01, 2016',
      project_length: 'Long-term (6+ Months)',
      weekly_hours: '40',
      commute: 'Rotational Schedule',
      rotational_days_on: '15',
      rotational_days_off: '15',
      project_budget: "25,000",
      desired_candidate: {
        experience: {exp1: 'Six Sigma', exp2: 'Safety'}
      },
      education:'MBA',
      date_created: '2015-02-01T16:06:58.970Z'
    },
      {
      projectId: 2,
      projectDescription: {
        project_title: 'Alaska Safety Seminar',
        overview: 'Need a project manager to provide a safety seminar for employees working on the Alaskan pipeline  .',
        deliverable: 'A fully informed and safety certified team'
      },
      location: {
        city: 'Juno',
        state: 'Alaska',
        country: 'USA'
      },
      start_date: 'January, 01, 2016',
      project_length: 'Mid-term (3+ Months)',
      weekly_hours: '40',
      commute: 'Rotational Schedule',
      rotational_days_on: '15',
      rotational_days_off: '15',
      project_budget: "15,000",
      desired_candidate: {
        experience: {exp1: 'Six Sigma', exp2: 'Safety'}
      },
      education:'MBA',
      date_created: '2015-04-01T16:06:58.970Z'
    } 
  ];
});