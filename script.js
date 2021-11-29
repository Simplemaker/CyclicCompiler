
class Fraction{
  constructor(num, den){
    this.num = num
    this.den = den
  }

  toString(){
    return this.num + "/" + this.den
  }
}

F_ONE = new Fraction(1,1)

class FProgram{
  constructor(farray){
    this.farray = farray
  }

  getFactor(a){
    for(var i=0; i<this.farray.length; i++){
      var frac = this.farray[i]
      if(a % frac.den == 0){
        return frac
      }
    }
    return F_ONE
  }

  getN(){
    dens = []
    for(var i=0; i<this.farray.length; i++){
      dens.push(this.farray[i])
    }
    return LCM(dens)
  }
}

class Cyclic{
  constructor(n, farray){
    this.n = n
    this.farray = farray
  }
}
