

const scriptsInEvents = {

	async Multiplayerevents_Event1_Act2(runtime, localVars)
	{
		runtime.globalVars.Joueur1 = window.prompt("Comment se nomme le joueur 1 (le premier qui jouera la souris)?");
		runtime.globalVars.Joueur2 = window.prompt("Comment se nomme le joueur 2 (le deuxième qui jouera la souris)?");
	},

	async Menuevents_Event1_Act1(runtime, localVars)
	{
		if(Notification.permission === "granted"){
			const notification = new Notification(localVars.text);
		}
	},

	async Menuevents_Event2_Act1(runtime, localVars)
	{
		if(Notification.permission === "default"){
			Notification.requestPermission();
			window.alert("N'hésitez pas d'activer les notifications, cela offre une meilleure expérience");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
