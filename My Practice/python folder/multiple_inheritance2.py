class Person(object):
    def __init__(self, name):
        self.name = name
    def getName(self):
        return self.name
class Child(Person):
    def __init__(self, name, age):
        Person.__init__(self, name)
        self.age = age
    def getAge(self):
        return self.age

class GrandChild(Child):
    def __init__(self, name, age, number):
        Child.__init__(self, name, age)
        self.number = number
    def getNumber(self):
        return self.number

bo = GrandChild("tunde", 32, 8037272452)
print(bo.getName(), bo.getAge(), bo.getNumber())