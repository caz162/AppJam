#pragma strict

var selected : GameObject = null;
var mouseOver = false;
var aiming = false;
var firing = false;
var object: Rigidbody;
var clone :Rigidbody;


function Start () {
//	selected.SendMessage("Fire",1);
}

function Update () {


if(aiming)
{

	var screenPoint = Input.mousePosition;
	screenPoint.z = 10.0f; //distance of the plane from the camera
	var pos = Camera.main.ScreenToWorldPoint(screenPoint);
	
	var dist = selected.transform.position - pos;
	Debug.Log(dist);
	Debug.Log(dist.magnitude); 
	/*
	if(dist.magnitude< 50 || dist.magnitude> -50){
		clone.transform.position = (pos.normalized *18);
	}
	else
		/lone.transform.position = pos;
	clone.velocity = Vector3.zero;
	clone.position.z =0;
	*/
	if (Input.GetButtonDown("Fire2"))
	{
		if((Input.mousePosition - selected.transform.position).magnitude > 50){
		var newPos = (Input.mousePosition - selected.transform.position)*50;
		clone.position = newPos;
		
		aiming = false;
		}
	}
	
	
}
if(selected ==  null){

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
		aiming = true;
		Debug.Log("Firing");
		clone = Instantiate(object,Vector3(selected.transform.position.x+10,selected.transform.position.y,selected.transform.position.z), Quaternion.identity);
		clone.transform.parent = selected.gameObject.transform;
		//selected = null;
	}
	}
	
	if (GUI.Button (Rect (10,360,150,100), "quit")) {
		print ("quit!");
		selected = null;
	}
	}
	}

 
