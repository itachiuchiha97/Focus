var name = 'Sahil'
var age = '21'
var addresssss = 'C-28, CRRI STAFF COLONY'

let webPage

function pauseee() {
    for(let i=0; i<3; i++){
        setTimeout(pauseee,500)
        console.log(i)
        return i

    }
    console.log('done')
}


//THIS IS AN HTML STRING (without template strings)
webPage = '<ul> <li> Name: '+pauseee()+' </li> <li> Age: '+age+' </li> <li> Location:  '+addresssss+' </li> </ul>'

//USING TEMPLATE STRINGS ``

webPage_NewSyntaxed = `
<ul>
    <li> Name: ${name} </li>
    <li> Age: ${age} </li>
    <li> Location: ${addresssss}</li>
</ul>
`

document.body.innerHTML = webPage_NewSyntaxed



