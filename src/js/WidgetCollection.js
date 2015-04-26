var Backbone = require('backbone');
var WidgetModel = require('./WidgetModel');

module.exports = Backbone.Collection.extend({
  model: WidgetModel,
  // HACK: In an actual app, these will be stored from the server
  widgetData: {
    'food': {
      name: 'Food Journal',
      id: 'food',
      pointer: true,
      image: '../../media/foodTrackerBg.jpg',
      tags: 'Food Log, Calorie Counter, Personalize Plan',
      description: 'Personlize your diet plan and keep track of your food and caloric intake to develop better lifelong eating habits and lose weight.',
      icon: 'food_journal'
    },
    'blood-pressure': {
      name: 'Blood Pressure',
      id: 'blood-pressure',
      image: '../../media/bloodPressureBg.jpg',
      tags: 'Monitor and record blood pressure reading',
      description: 'Track your blood pressure to help work toward a lower blood pressure to lower the risk of heart diseases, stroke and other problems.',
      icon: 'blood_pressure'
    },
    'blood-glucose': {
      name: 'Blood Glucose',
      id: 'blood-glucose',
      image: '../../media/bloodSugarBg.jpg',
      tags: 'Track glucose change through the day and night',
      description: 'Monitoring your blood glucose  levels to prevent, delay or manage  at risk or diabetic diagnosis.',
      icon: 'blood_glucose'
    },
    'fitness-planner': {
      name: 'Fitness Planner',
      id: 'fitness-planner',
      image: '../../media/fitnessTrackerBg.jpg',
      tags: 'Weight, Exercise, Calories Burned, Heart Rate',
      description: 'Tracking activities, setting goals, increase mindfullness of excerise, provide insight into your habits and improve your overall health.',
      icon: 'fitness_planner'
    },
    'sleep-analysis': {
      name: 'Sleep Analysis',
      id: 'sleep-analysis',
      image: '../../media/sleepTrackerBg.jpg',
      tags: 'Sleep Summary, Visualize Sleep Cycles',
      description: 'Monitoring your personal sleep perfomance to better understand  and work toward improving the quality of your sleep.',
      icon: 'sleep_analysis'
    },
    'medication': {
      name: 'Medication',
      id: 'medication',
      image: '../../media/medicationTrackerBg.jpg',
      tags: 'Medication Reminder and Analysis',
      description: 'Take medicines at the right time, never forget to refill prescriptions, and understand if your prescribed medication is working for you.',
      icon: 'medication'
    }
  },
  addWidget: function(pId){
    // if widget model exists via id
    if ( !this.get(pId) ) {
      // add
      this.add( this.widgetData[pId] );
    }
    return this;
  },
  removeWidget: function(pId){
    // if widget model exists via id
    if ( this.get(pId) ) {
      // remove
      this.remove( this.get(pId) );
    }
    return this;
  },
});
