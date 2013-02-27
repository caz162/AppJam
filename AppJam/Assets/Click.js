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
	screenPoint.z = 01.0f; //distance of the plane from the camera
	var pos = Camera.main.ScreenToWorldPoint(screenPoint);
	clone.velocity = Vector3.zero;
	if (Input.GetButtonDown("Fire1")){
		//clone.AddForce(pos.normalized*1000);
		//aiming =false;
		 var ray1 = Camera.main.ScreenPointToRay (Input.mousePosition);
		 Debug.Log(ray1.origin);
		 clone.transform.position = Vector3(ray1.origin.x,ray1.origin.y,0);
		
	}
	if (Input.GetButtonDown("Fire2")){
		clone.AddForce((selected.transform.position - clone.transform.position).normalized*1500);
		selected.SendMessage("Hit");
		aiming =false;
		//clone = null;
		
		
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
	GUI.Box(Rect(10,120,250,100),
			"Planet Name \t"+selected.GetComponent(PlanetScript).planetName+
			"\n Population \t"+selected.GetComponent(PlanetScript).population+
			"\n Planet Mass \t"+selected.rigidbody.mass+
			"\n Planet Inhabitants \t"+selected.GetComponent(PlanetScript).inhabitants+
			"\n Planet gravity \t"+selected.GetComponent(PlanetScript).gravity);
	
	
	if(selected.GetComponent(PlanetScript).population >5 && clone == null && selected.GetComponent(PlanetScript).inhabitants == occupied.allied ){
		if (GUI.Button (Rect (10,240,150,100), "Colonise")) 
		{
		aiming = true;
		
		clone = Instantiate(object,Vector3(selected.transform.position.x+10,selected.transform.position.y,selected.transform.position.z), Quaternion.identity);
		Debug.Log("parent"+selected);
		clone.transform.parent = selected.gameObject.transform;
		Physics.IgnoreCollision(clone.collider, selected.collider);
		Debug.Log("parent"+clone.transform.parent);
		//selected = null;
	}
	}
	
	if(!aiming && clone != false){
	if (GUI.Button (Rect (10,240,150,100), "Cancel Colonise")) {
		aiming= false;
		Destroy(clone.gameObject);
	}
	
	}
	
	if (GUI.Button (Rect (10,360,150,100), "quit")) {
		print ("quit!");
		selected = null;
	}
	}
	}

 
