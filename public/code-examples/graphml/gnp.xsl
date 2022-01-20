<!--
-@author:	Christian Pich
-@contact:	Christian dot Pich at uni-konstanz dot de
-@name:		gnp.xsl
-@short:	Random graph generator style sheet, G(n,p)-model
-@version:	1.0
-@modified:	2004-09-27
-@param: 	n: number of nodes
		p: edge probability
-@desc: Creates an undirected graph with n vertices, and each possible
-edge with constant probability 0<p<1.  Both n and p can be set
-as parameters from the command line.  The style sheet actually
-does not transform any input, but can be applied to any file (e.g.
-itself).
-->


<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:math="java:java.lang.Math"
    xmlns:g="http://graphml.graphdrawing.org/xmlns/graphml"
    xmlns="http://graphml.graphdrawing.org/xmlns/graphml"
    xpath-default-namespace="http://graphml.graphdrawing.org/xmlns/graphml"
    exclude-result-prefixes="math g"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns/graphml">
  <xsl:output method="xml" indent="yes" encoding="iso-8859-1"/>
  <xsl:namespace-alias stylesheet-prefix="g" result-prefix="#default"/>

  <xsl:param name="n">10</xsl:param> <!-- number of nodes -->
  <xsl:param name="p">1</xsl:param>  <!-- edge probability -->
  <xsl:variable name="r" select="1 div math:log(1 - $p)"/>

  <xsl:template match="/" >
    <graphml xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns/graphml">
      <graph id="G" edgedefault="undirected">
        <xsl:call-template name="generatenodes"/>
        <xsl:call-template name="generateedges"/>
      </graph>
    </graphml>
  </xsl:template>

  <xsl:template name="generatenodes">
    <xsl:param name="n" select="$n"/>
    <node id="n{$n}"/>
    <xsl:if test="$n &gt; 1">
      <xsl:call-template name="generatenodes">
        <xsl:with-param name="n" select="number($n)-1"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

  <xsl:template name="generateedges">
    <xsl:param name="v" select="number(1)"/>
    <xsl:param name="w" select="number(1)"/>
    <xsl:variable name="index">
      <xsl:call-template name="vw">
        <xsl:with-param name="v" select="number($v)"/>
        <xsl:with-param name="w" select="number($w) + 1 + floor($r * math:log(math:random()))"/>
      </xsl:call-template>
    </xsl:variable>
    <xsl:if test="number($index/v) &lt; $n">
      <edge source="n{$index/v}" target="n{$index/w}"/>
      <xsl:call-template name="generateedges">
        <xsl:with-param name="v" select="$index/v/text()"/>
        <xsl:with-param name="w" select="$index/w/text()"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

  <xsl:template name="vw">
    <xsl:param name="v"/>
    <xsl:param name="w"/>
    <xsl:choose>
      <xsl:when test="$w &gt; $n and $v &lt; $n">
        <xsl:call-template name="vw">
          <xsl:with-param name="v" select="$v + 1"/>
          <xsl:with-param name="w" select="$w - $n + $v + 1"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <v><xsl:value-of select="$v"/></v>
        <w><xsl:value-of select="$w"/></w>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
