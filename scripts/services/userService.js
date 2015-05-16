var app = angular.module('energyLeaders');


app.service('UserService', function(){

  this.displayAll = function(obj) {
    var allItems = '';
    for (var prop in obj) {
      allItems = allItems + ', ' + obj[prop];
    }
    return allItems.replace(',', '');
  };


  this.rotationalDays = function(days) {
    if (days) {
      return true;
    }
    else {
      return false;
    }
  };

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
        project_title: 'Project Implementation Plan',
        overview: 'We have a temporary need for an individual with significant project management experience in the oil and gas industry.  The implementation manager will manage the implementation of a transatlantic pipeline.  Must be able to manage projects on a global scale and stakeholders across various global regions.',
        deliverable: 'A functional pipeline'
      },
      location: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
      },
      start_date: 'February, 01, 2016',
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
      project_length: 'Mid-term (3 to 6 Months)',
      weekly_hours: '40',
      commute: 'Rotational Schedule',
      rotational_days_on: '15',
      rotational_days_off: '15',
      project_budget: "15,000",
      desired_candidate: {
        experience: {exp1: 'Six Sigma', exp2: 'Safety', exp3: 'Scrum', exp4: 'Agile'}
      },
      education:'MBA',
      date_created: '2015-04-01T16:06:58.970Z'
    },
      {
      projectId: 3,
      projectDescription: {
        project_title: 'Efficiency & Productivity Seminar',
        overview: 'Need an experienced efficiency and productivity consultant to provide a seminar for employees working on Brazilian oil rig. Must speak Portuguese!',
        deliverable: 'A fully certified team'
      },
      location: {
        city: 'Sao Paolo',
        state: 'Sao Paolo',
        country: 'Brazil'
      },
      start_date: 'March, 01, 2016',
      project_length: 'Mid-term (3 to 6 Months)',
      weekly_hours: '40',
      commute: 'Rotational Schedule',
      rotational_days_on: '15',
      rotational_days_off: '15',
      project_budget: "20,000",
      desired_candidate: {
        experience: {exp1: 'Six Sigma', exp2: 'Safety'}
      },
      education:'MBA',
      date_created: '2015-03-01T16:06:58.970Z'
    },
      {
      projectId: 4,
      projectDescription: {
        project_title: 'Operational Assessment',
        overview: 'Need an experienced consultant to provide an operational assessment on our operation in Houston, Texas.  Operation consist of 250 oil rig workers, with a small management team.  Must be able to generate dashboards that report ongoing progress.',
        deliverable: 'A more efficient operation, hard-data'
      },
      location: {
        city: 'Houston',
        state: 'Teas',
        country: 'USA'
      },
      start_date: 'April, 01, 2016',
      project_length: 'Long-term (6+ Months)',
      weekly_hours: '40',
      commute: 'Rotational Schedule',
      rotational_days_on: '7',
      rotational_days_off: '7',
      project_budget: "80,000",
      desired_candidate: {
        experience: {exp1: 'Six Sigma', exp2: 'Safety'}
      },
      education:'MBA',
      date_created: '2015-02-01T16:06:58.970Z'
    },
    {
      projectId: 5,
      projectDescription: {
        project_title: 'Production Processing Plan',
        overview: 'Need an experienced consultant to analyze our operation and create a production processing plan based on the assesment findings. Consultant will need to have processing plant experience.  Time will vary from location to location in South Carolina plants.',
        deliverable: 'Deliver and implement updated processing plan'
      },
      location: {
        city: 'Charleston',
        state: 'South Carolina',
        country: 'USA'
      },
      start_date: 'October, 01, 2015',
      project_length: 'Long-term (6+ Months)',
      weekly_hours: '40',
      commute: 'Rotational Schedule',
      rotational_days_on: '15',
      rotational_days_off: '7',
      project_budget: "60,000",
      desired_candidate: {
        experience: {exp1: 'Six Sigma', exp2: 'Safety'}
      },
      education:'MBA',
      date_created: '2015-04-01T16:06:58.970Z'
    },
          {
      projectId: 6,
      projectDescription: {
        project_title: 'Operational Assessment',
        overview: 'Need an experienced consultant to provide an operational assessment on our operation in Houston, Texas.  Operation consist of 250 oil rig workers, with a small management team.  Must be able to generate dashboards that report ongoing progress.',
        deliverable: 'A more efficient operation, hard-data'
      },
      location: {
        city: 'Houston',
        state: 'Teas',
        country: 'USA'
      },
      start_date: 'April, 01, 2016',
      project_length: 'Long-term (6+ Months)',
      weekly_hours: '40',
      commute: 'Offshore',
      rotational_days_on: '15',
      rotational_days_off: '15',
      project_budget: "80,000",
      desired_candidate: {
        experience: {exp1: 'Six Sigma', exp2: 'Safety'}
      },
      education:'MBA',
      date_created: '2015-02-01T16:06:58.970Z'
    },
    {
      projectId: 7,
      projectDescription: {
        project_title: 'Organizational Development Plan',
        overview: 'Need an experienced consultant to analyze our team efficiency and provide an organizational development plan that will create more efficiencies and productivity from our human caplital.',
        deliverable: 'Deliver and implement an Organizational Development Plan'
      },
      location: {
        city: 'Vancouver',
        state: 'British Colombia',
        country: 'Canada'
      },
      start_date: 'September, 01, 2015',
      project_length: 'Mid-term (3 to 6 Months)',
      weekly_hours: '40',
      commute: 'Travel and work at client site.',
      rotational_days_on: '',
      rotational_days_off: '',
      project_budget: "20,000",
      desired_candidate: {
        experience: {exp1: 'Six Sigma', exp2: 'Safety'}
      },
      education:'MBA',
      date_created: '2015-05-01T16:06:58.970Z'
    }   
  ];
});