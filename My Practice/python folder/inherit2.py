class A(object):
    def __init__(self, n="tunde"):
        self.n = n
    print("his name is {}".format(n))
class B(A):
    def __init__(self, n="tunde"):

a = A("Gene")
print(a.name)