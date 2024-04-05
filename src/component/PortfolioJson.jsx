import * as Icon from 'react-bootstrap-icons';
const details =
    [
        { id: 1, img:'chsi.jpg', category: 'Website', url: 'https://caritashealthshield.com.ph/', dateHired: 'Jul 2018 - Nov 2022', 
            details:'Maintained & Build using the ff <br/> Laravel v5.5, MariaDB, JQuery, Ajax, JSON' },
        { id: 2, img:'chsi-mis.jpg', category: 'Website', url: 'https://caritashealthshield.com.ph/caritas_mis/', dateHired: 'Jul 2018 - Nov 2022', 
            details:'Maintained & Build using the ff<br/>Laravel v5.5, MariaDB, JQuery, Ajax, JSON' },
        { id: 3, img:'chsi-proposal.jpg', category: 'Website', url: 'https://caritashealthshield.com.ph/new_proposal/', dateHired: 'Jul 2018 - Nov 2022', 
            details:'Maintained & Build using the ff<br/>Laravel v5.5, MariaDB, JQuery, Ajax, JSON' },
        { id: 4, img:'issabelPBX.jpg', category: 'Website', url: 'https://www.issabel.org/get-issabel/', dateHired: 'Nov 2022 - Present',  
            details:'Modification of Issabel PBX Module (CampaignOut, CallsReports, Setup Extensions, Queuee Configuration, Callback Extensions & API Integration(Using Python))' },
        { id: 5, img:'nodejs-expressjs.jpg', category: 'Website', url: 'https://github.com/jpsandiego22/nodeJS-Crud-Jwt-BasicAuth-RestApi', dateHired: 'N/A', 
            details:'Build using NodeJS, ExpressJS, JSON Web Token & Basic Authorization - CRUD RestAPI.' },
        { id: 6, img:'react-works.jpg', category: 'Website', url: '/', dateHired: 'N/A', 
            details:'Maintained & Build using the ff<br/>ReactJS & uploaded using Github Page.' },
        { id: 7, img:'aeon-webadmin.jpg', category: 'Website', url: 'N/A', dateHired: 'N/A', 
            details:'Maintained & Build using the ff<br/>Laravel v5.5, VueJS, MariaDB, JQuery, Ajax, JSON' }
           
    ];
const MyComponent = () => (
    <pre>
      {'This is the first sentence.<br/>This is the second sentence.'}
    </pre>
  )
const projects =
    [
        { id: 1, keys:'1', img:'jpsd/chsi.jpg', projectName: 'CARITAS HEALTH SHIELD WEBSITE', title:'LARAVEL', url: 'https://caritashealthshield.com.ph/', dateHired: 'Jul 2018 - Nov 2022', details:'Maintained & Build using the ff<br/>Laravel v5.5, MariaDB, JQuery, Ajax, JSON' },
        { id: 2, keys:'2', img:'jpsd/chsi-mis.jpg', projectName: 'CHSI MIS', title:'LARAVEL', url: 'https://caritashealthshield.com.ph/caritas_mis', dateHired: 'Jul 2018 - Nov 2022', details:'Maintained & Build using the ff<br/>Laravel v5.5, MariaDB, JQuery, Ajax, JSON' },
        { id: 3, keys:'3', img:'jpsd/chsi-proposal.jpg', projectName: 'CHSI PROPOSAL SYSTEM', title:'LARAVEL', url: 'https://caritashealthshield.com.ph/new_proposal', dateHired: 'Jul 2018 - Nov 2022', details:'Maintained & Build using the ff<br/>Laravel v5.5, MariaDB, JQuery, Ajax, JSON' },
        { id: 4, keys:'4', img:'jpsd/issabelPBX.jpg', projectName: 'ISSABEL PBX MODULE', title:'AEON VIETNAM', url: 'https://www.issabel.org/get-issabel/', dateHired: 'Nov 2022 - Present', details:'Maintained & Build using the ff<br/>Laravel v5.5, MariaDB, JQuery, Ajax, JSON' },
        { id: 5, keys:'5', img:'jpsd/nodejs-expressjs.jpg', projectName: 'ExpressJS-Crud-JWT-BasicAuth-RestAPI', title:'NODJS', url: 'https://github.com/jpsandiego22/nodeJS-Crud-Jwt-BasicAuth-RestApi', dateHired: 'N/A', details:'Maintained & Build using the ff<br/>Laravel v5.5, MariaDB, JQuery, Ajax, JSON' },
        { id: 6, keys:'6', img:'jpsd/react-works.jpg', projectName: 'MySite', title:'ReactJS', url: '', dateHired: 'N/A', details:'Maintained & Build using the ff<br/>Laravel v5.5, MariaDB, JQuery, Ajax, JSON' },
    ];




export {details,projects};