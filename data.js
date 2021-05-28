let data1=[
  {
    "subject": "react",
    "topics": [
      "constructor class",
      "hoc /pure component",
      "life cycle method",
      "hooks",
      "contact api",
      "component communication",
      "real / virtual dom",
      "state/ props",
      "error boundary",
      "ssssssssssss",
      "ssssssssssss"
    ]
  },
  {
    "subject": "js",
    "topics": [
      "ajax /fetch",
      "async/await",
      "bind/apply/call",
      "let/var/const",
      "global/local/block scope",
      "event propagation",
      "clouser/hosting",
      "closure/hosting",
      "arrays/map/filter/for",
      "callback",
      "es6 arrays",
      "data structure queue,stack,list,array",
      "weak set/weak map",
      "try catch",
      "spread operator",
      "document query selector"
    ]
  },
  {
    "subject": "html",
    "topics": [
      "inline element",
      "inline element",
      "inline element"
    ]
  },
  {
    "subject": "css",
    "topics": [
      "flex box",
      "element position ",
      "media queries"
    ]
  },
  {
    "subject": "json",
    "topics": [
      "crud"
    ]
  },
  {
    "subject": "ajax",
    "topics": [
      "dddddddd",
      "xhtp",
      "xhtp"
    ]
  },
  
  {
    "subject": "react",
    "topics": [
      "ssssssssssss",
      "ssssssssssss"
    ]
  },
  {
    "subject": "",
    "topics": []
  }
];
data.map((ele)=>{
   return ele
})


console.log(data);

 modifiedData=data.map((list)=>{
  console.log(data)
  let topics= list.topic
  modifiedTopics = topics.map((topic)=>{
    let topicObject{
      topicName:topic,
      switchValue:false
    }
    return topicObject
  })
  list.topic= modifiedTopics
  return  list

})
console.log (JSON.stringify(modifiedData))
 