'''class Person(object):
    def __init__(self, name):
        self.name = name
    def getName(self):
        return self.name
    def isEmployee(self):
        return False
    
class Employee(Person):
    #def print(self):
    def isEmployee(self):
        return True
    
p1 = Person("deejo")
print(p1.getName())
print(p1.isEmployee())
e1 = Employee("tunde")
print(e1.getName(), e1.isEmployee())
'''
class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def getName(self):
        print(self.name)
        print(self.age)
        
class Employee(Person):
    def print(self, name, age, post, calling):
        self.post = post
        self.calling = calling
        Person.__init__(self, name, age)
    

p1 = Person("gene", 43)
p1.getName()

e1 = Employee("hannah", 36)
e1.getName()