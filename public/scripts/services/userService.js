var app = angular.module('energyLeaders');


app.service('UserService', function($http, $q) {

  this.updateContactInfo = function(user) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: '/api/update/user-info/:userId',
      data: {
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
        country: user.country
      }
    }).then(function(response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };



//** SEEDED DATA AND FUNCTIONS **/

  this.displayAll = function(obj) {
    var allItems = '';
    for (var prop in obj) {
      allItems = allItems + ', ' + obj[prop];
    }
    return allItems.replace(',', ' ');
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
      //reference
      profilesData: [ 
        { 
          Id: '24681' 
        } 
      ],
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
      phone_number: "801-901-5595",
      date_created: '2015-05-01T16:06:58.970Z'
    },
    {
      profilesData: [ 
        { 
          //reference
          Id: '54321' 
        } 
      ],
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
      phone_number: "801-924-5555",
      date_created: '2014-08-01T16:06:58.970Z'
    },
    {
      //reference
      profilesData: [ 
        { 
          Id: '98765'
        } 
      ],
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
      phone_number: "801-444-5555",
      date_created: '2015-01-01T16:06:58.970Z'
    },
    {
      profilesData: [ 
        { 
          //reference
          Id: '12345' 
        } 
      ],
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
      phone_number: "801-234-5555",
      date_created: '2015-03-01T16:06:58.970Z'
    }
  ];



  this.profilesData = [
    { 
      Id: '12345',
      skills: 
      {
        skill1: 'Six Sigma',
        skill2: 'Agile',
        skill3: 'CPM'
      },
      // degrees: { 
      //   deg1: 'B.S.',
      //   deg2: 'MBA',
      //   deg3: 'Phd'
      // },
      // major: {
      //   deg1: 'B.A.',
      //   deg2: 'MBA'
      // },


        schools: 
      [
        {
          school: "BYU",
          deg: "B.S.",
          maj: "Accounting",
          year: "2001" 
        },
        {
          school: "University of Arizona",
          deg: "MBA",
          maj: "Global Business",
          year: "2005"

        }
      ],    
      summary: 'A professional with 10 years expereince within the Oil and Gas industry.  Highly experenced with efficiency training and team productivity managment and organizational change and design.',
      work_history: 
      [
        {
          employer_name: 'Gasket Consulting Group',
          position_title: 'Operation Manager',
          location_city: 'Houston',
          location_state:'Texas',
          location_country: 'USA',
          employment_start_date: '2002-10-12',
          employment_end_date: '2005-09-10',
          position_summary: 'Responsible for managing the profitability of several oil and gas projects. Managed the integration of several pipeline projects, with budget\'s of $350 Million'
        },
        {
          employer_name: 'Clampet\'s Oil',
          position_title: 'General Manager',
          location_city: 'Nashville',
          location_state:'Tenessee',
          location_country: 'USA',
          employment_start_date: '2005-10-01',
          employment_end_date: '2010-09-01',
          position_summary: 'Managed the oil assets for a group of oil land owners from Tennessee.  Provided all aspects of workforce managment and pipeline maintenance managment'
        },
        {
          employer_name: 'Pipeline Runner',
          position_title: 'performance Manager',
          location_city: 'Houston',
          location_state:'Texas',
          location_country: 'USA',
          employment_start_date: '2010-10-01',
          employment_end_date: 'Present',
          position_summary: 'Perform organizational change and workforce optimization consulting. Focusing on developing workshops using exclusive and proven tecnhniques for optimization.'
        }
      ]
    },
    {
      Id: '54321',
      //refrenced because need to enable search capabilities
      skills: 
      {
        skill1: 'Six Sigma',
        skill2: 'Agile',
        skill3: 'CPM'
      },
      // degrees: {
      //   deg1: 'B.A.',
      //   deg2: 'M.A.'
      //  },
      // major: {
      //   deg1: "Finance",
      //   deg2: "Economics"
      // },
      // institutions: {
      //   school1: "University of Utah",
      //   school2: "UCLA"
      // },
      //  grad_year: {
      //   year1: "2002",
      //   year2: "2008"
      // },
      //Grouped object of education data
      schools:
      [
        {
          school: "BYU",
          deg: "B.S.",
          maj: "Accounting",
          year: "2001" 
        },
        {
          school: "University of Arizona",
          deg: "MBA",
          maj: "Global Business",
          year: "2005"

        }
      ],      
      summary: 'A professional with 10 years experience within the Oil and Gas industry.  Highly experenced with efficiency training and team productivity managment and organizational change and design.',
      work_history: 
      [
        {
          employer_name: 'Oilers Workers Group',
          position_title: 'Implementation Manager',
          location_city: 'Houston',
          location_state:'Texas',
          location_country: 'USA',
          employment_start_date: '02/2001',
          employment_end_date: '01/2008',
          position_summary: 'Managed several large scale production oil and gas projects. Performed several years of performance managment training for lower level managers and was responsible for performance managment tracking throughout the production organization.'
        },
        {
          employer_name: 'Pipeline Runner',
          position_title: 'Senior Project Manager',
          location_city: 'Houston',
          location_state:'Texas',
          location_country: 'USA',
          employment_start_date: '01/2008',
          employment_end_date: 'Present',
          position_summary: 'Perform organizational change and workforce optimization consulting. Focusing on developing workshops using exclusive and proven tecnhniques for optimization.'
        }
      ]
    }
  ];


  // this.businessmajorData = [
  //   {
  //     id: '13245',
  //     maj: [{name: 'Economics'}, {name: 'Accounting'}],
  //     users: [{objectid ref user}]

  //   },
  //   {
  //     id: '24681',
  //     maj1: 'Finance',
  //     maj2: 'Economics'
  //   }
  // ];

  // this.engineeringmajorData = [
  //   {
  //     id: '13245',
  //     maj1: 'Finance',
  //     maj2: 'Economics',
  //     maj3: 'Global Business'
  //   },
  //   {
  //     id: '24681',
  //     maj1: 'Finance',
  //     maj2: 'Economics'
  //   }
  // ];


  // this.degreeData = [
  //   {
  //     id: '13245'
  //     deg1: 'B.A./B.S.',
  //     deg2: 'M.A.',
  //     deg3: 'M.B.A.',
  //     deg4: 'Phd'
  //   },
  //   {
  //     id: '24681'
  //     deg1: 'B.A./B.S.',
  //     deg2: 'M.A.'
  //   }
  // ];

  // this.majorData = [

  // ];


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