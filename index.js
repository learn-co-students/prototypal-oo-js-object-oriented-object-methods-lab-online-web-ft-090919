function BoardMember(name, homestate, training) {
    this.name = name
    this.homestate = homestate
    this.training = training
}

BoardMember.prototype.veto = _ => 'No, I must disagree'

BoardMember.prototype.approve = _ => 'You can do that!'

BoardMember.prototype.doCharity = _ => 'I like to help people.'

BoardMember.prototype.releasePressStatement = _ => 'You will see great things from Scuber.'

BoardMember.prototype.sayHi = _ => `Hi my name is ${this.name}. I am from ${homestate}, and I was trained in ${training}.`

