class JefeDeObra {
  private static jefeDeObra: JefeDeObra;

  private constructor() {}

  public static getJefeDeObra(): JefeDeObra {
    if (JefeDeObra.jefeDeObra == null) {
      JefeDeObra.jefeDeObra = new JefeDeObra();
    }
    return JefeDeObra.jefeDeObra;
  }
}

function clientRequest() {
  const encargo1 = JefeDeObra.getJefeDeObra();
  const encargo2 = JefeDeObra.getJefeDeObra();
  if (encargo1 === encargo2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}

clientRequest();
