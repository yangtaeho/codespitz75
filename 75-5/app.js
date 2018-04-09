const app = new App('#stage');
//라우터를 앱으로 만듦... 개입할 여지를 만들기 위해서..
app.add('home:detail', _=>new Home(true));
app.route('home');

const App = class{
  constructor(_parent = err()){

  }
  add(k = err(), controller = err()){
    //FIXME k[0]:v 오타임..

  }
  route(path = err(), ...arg){

  }
};


