from setuptools import setup, find_packages

__version__ = 0.1

setup(
    name='TmpMail',
    version=__version__,
    description='Easy temporary mail',
    author='Terrabitz',
    author_email='trevor.taubitz@gmail.com',
    packages=find_packages,
    include_package_data=True,
    install_requires=[
        'Flask>=0.10.0',
        'Flask-Webpack>=0.0.7'
    ]
)