#pragma strict

var selected : GameObject = null;
var mouseOver = false;
var aiming = false;
var firing = false;
var object: Rigidbody;

function Start () {
selected.SendMessage("Fire",1);
}

function Update () {

if(selected ==  null){

if(aiming)
{
	object.transform.position = Input.mousePosition;
}
if (Input.GetButtonDown("Fire1")) {
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    if (Physics.Raycast (ray, hit, 100)) {
    
    if(hit.transform.gameObject.tag == "plane"){
    	selected = null;
    }
    else
    
    	selected = hit.transform.gameObject;


    }
    else
    {
    	selected = null;
    	mouseOver = false;
    }
	
}
}
}



function OnGUI () {
	if(selected != null){
	if (GUI.Button (Rect (10,10,150,100), ""+selected.tag)) {
		print ("You clicked the button!");
		mouseOver = false;
	}
	GUI.Box(Rect(10,120,150,100),
			"Planet Name \t"+selected.GetComponent(PlanetScript).planetName+
			"\n Population \t"+selected.GetComponent(PlanetScript).population+
			"\n Planet Mass \t"+selected.rigidbody.mass+
			"\n Planet gravity \t"+selected.GetComponent(PlanetScript).gravity);
	
	
	if(selected.GetComponent(PlanetScript).population >5){
		if (GUI.Button (Rect (10,240,150,100), "Colonise")) 
		{
		Debug.Log("Firing");
		var clone : Rigidbody = Instantiate(object,Vector3(selected.transform.position.x+10,selected.transform.position.y,selected.transform.position.z), Quaternion.identity);
		clone.transform.parent = selected.gameObject.transform;
		selected = null;
	}
	}
	
	}
	}

 
