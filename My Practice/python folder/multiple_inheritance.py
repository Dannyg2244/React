class Base1(object):
    def __init__(self):
        self.name1 = "Tunde"
        print("Base1")
        
class Base2(object):
    def __init__(self):
        self.name2 = "Mathew"
        print("Base2")
        
class Derived(Base1, Base2):
    def __init__(self):
        Base1.__init__(self)
        Base2.__init__(self)
        print("Derived")
    def printName(self):
        print(self.name1, self.name2)
        
bo = Derived()
bo.printName()