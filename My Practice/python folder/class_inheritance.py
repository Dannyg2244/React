class Person(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        print("my name is {} and my age is {}".format(name, age))
        
class Teacher(Person):
    def print(self):
        print("calling the class person")
        
t1 = Teacher("tunde", 45)
