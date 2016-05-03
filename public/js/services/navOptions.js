app.service('NavOptions',function(){

	var nav = [
		{
			img:'/assets/afakephoto.jpg',
			title:'MY SCHEDULE \& BIDDING',
			subNav:[]
		},
		{
			img:'/assets/afakephoto.jpg',
			title:'SAFETY',
			subNav:[
				{
					title:'Reporting',
					subNav:[
					'I-22 Injury Reporting',
					'ASAP Reporting',
					'General ASAP Information',
					'Flight Attendant Incident Report'
					]
				},
				{title:'Agriculture and Customs',subNav:[]},
				{title:'Know Crewmember'},
				{title:'Product Safety Data Search'}
			]
		},
		{
			img:'/assets/afakephoto.jpg',
			title:'TRAINING'
		},
		{
			img:'/assets/afakephoto.jpg',
			title:'ADMINISTRATION',
			subNav:[
				{title:'OJI and Leaves',subNav:[]},
				{title:'Pay and Benefits',subNav:[]},
				{title:'Performance',subNav:[]},
				{title:'Inflight Resource Directory'},
				{title:'Mobile and Web',subNav:[]},
				{title:'AFA'}
			]
		},
		{
			img:'/assets/afakephoto.jpg',
			title:'CATERING \& BRAND',
			subNav:[]
		},
		{
			img:'/assets/afakephoto.jpg',
			title:'HOTELS'
		},
		{
			img:'/assets/afakephoto.jpg',
			title:'MY BASE'
		},
		{
			img:'/assets/afakephoto.jpg',
			title:'RECOGNITION'
		},
		{
			img:'/assets/afakephoto.jpg',
			title:'MY LEADERSHIP TEAM'
		}
	]

	return{
		getNav:function(){
			return nav;
		}
	}
})