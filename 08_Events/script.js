// We can handle events in JS using methods like onclick(), attachEvent() etc., but the most used and important
// method is eventListner() 

// IMPORTANT POINT => In eventListener() we can also give a third parameter as true or false which is takes
// false by default!! Other two parameters are -> Event type and function:-

document.getElementById("owl").addEventListener('click', function (e) {
    console.log(e);
})

// Important thing to study in event prototype are:-
// Type of Events, Timestamp, preventDefault(), target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

document.querySelector('#images').addEventListener('click', function(e)
{
    console.log(e.target.tagName); // Just checking purpose!!
    if (e.target.tagName === 'IMG') // Checking beacuse if LI will get clicked the parentnode will get removed which means the complete ul will get removed!!
    {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})
    
//removeIt.parentNode.removeChild(removeIt)

// Also revisit topics of event bubbling and propagation in brief!!