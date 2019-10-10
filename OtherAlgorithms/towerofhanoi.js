function toh(count, source, aux, destination, steps) {
    
    steps = steps || [];

    // if only one disc remains transfering it from source to destination
    if (count === 1) {
      steps.push({
          'disc': 1,
          'from': source,
          'to': destination
      });
    }
    else {
        //aux becomes destination and destination becomes aux
        hanoi(count - 1, source, destination, aux, steps);

        steps.push({
          'disc': count,
          'from': source,
          'to': destination
        });
        
        // aux become source and source become aux
        hanoi(count - 1, aux, source, destination, steps);
    }
    return steps;
}

// X: Source Y: Auxiliary Z: Destination
var steps = toh(5,'X','Y','Z');

steps.forEach((step)=>
    console.log(step.disc+' moved from '+step.from+' to '+step.to)
);