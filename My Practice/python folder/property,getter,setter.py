#getter example bel
class Person:
    def __init__(self, name):
        self._name = name
    
    @property
    def name(self):
        return self._name
p = Person("John Smith")
print(p.name)

# setter example below
class Person:
    def __init__(self, name):
        self._name = name
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise TypeError("Expected a string")
        self._name = value

p = Person("John Adam")
print(p.name)