#pragma strict

var selected : GameObject = null;

function Start () {

}

function Update () {
if (Input.GetButtonDown("Fire1")) {
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    if (Physics.Raycast (ray, hit, 100)) {
    	selected = hit.transform.gameObject;


    }
    else
    {
    	selected = null;
    }
	}
}


function OnGUI () {
	if(selected != null){
	if (GUI.Button (Rect (10,10,150,100), ""+selected.tag)) {
		print ("You clicked the button!");
	}
	GUI.Box(Rect(10,120,150,100),
			"Planet Name \t"+selected.GetComponent(PlanetScript).planetName+
			"\n Population \t"+selected.GetComponent(PlanetScript).population+
			"\n Planet Mass \t"+selected.rigidbody.mass+
			"\n Planet gravity \t"+selected.GetComponent(PlanetScript).gravity);
	}
}
 
