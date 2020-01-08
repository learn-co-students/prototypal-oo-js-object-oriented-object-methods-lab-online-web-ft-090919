function BoardMember(name, homeState, training) {
    this.name = name
    this.homeState = homeState
    this.training = training
}

BoardMember.prototype.veto = _ => 'No, I must disagree'

BoardMember.prototype.approve = _ => 'You can do that!'

BoardMember.prototype.doCharity = _ => 'I like to help people.'

BoardMember.prototype.releasePressStatement = _ => 'You will see great things from Scuber.'

BoardMember.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}